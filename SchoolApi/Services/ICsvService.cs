namespace EscolaApi.Services
{
    public interface ICsvService
    {
        Task SeedDataFromCsvAsync(string csvFilePath);
    }
}
