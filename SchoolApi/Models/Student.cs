using CsvHelper.Configuration.Attributes;

namespace EscolaApi.Models
{
    public class Student
    {
        [Ignore]
        public int Id { get; set; }
        public string? Nome { get; set; }
        public int Idade { get; set; }
        [Name("Série")]
        public int Serie { get; set; }
        [Name("Nota Média")]
        public double NotaMedia { get; set; }
        [Name("Endereço")]
        public string? Endereco { get; set; }
        [Name("Nome do Pai")]
        public string? NomePai { get; set; }
        [Name("Nome da Mãe")]
        public string? NomeMae { get; set; }
        [Name("Data de Nascimento")]
        public DateTime DataNascimento { get; set; }

    }
}
