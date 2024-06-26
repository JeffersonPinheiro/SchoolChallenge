using CsvHelper;
using Microsoft.EntityFrameworkCore;
using EscolaApi.Data;
using EscolaApi.Models;
using System.Globalization;
using System;

namespace EscolaApi.Services
{
    public class CsvService : ICsvService
    {
        private readonly ApiContext _context;

        public CsvService(ApiContext context) 
        {
            _context = context;
        }

        public async Task SeedDataFromCsvAsync(string csvFilePath)
        {
            if (!File.Exists(csvFilePath))
            {
                throw new FileNotFoundException($"O arquivo {csvFilePath} não foi encontrado.");
            }

            using var reader = new StreamReader(csvFilePath);
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);

            var students = csv.GetRecords<Student>().ToList();

            int maxId = _context.Students.Any() ? _context.Students.Max(s => s.Id) : 0;

            foreach (var student in students)
            {
                student.Id = ++maxId;
            }

            _context.Students.AddRange(students);
            await _context.SaveChangesAsync();
        }
    }

}

