using DunhumbyProductManagementAPI.Models;

namespace DunhumbyProductManagementAPI.Repositories
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAllProducts();
        Product GetProductById(int id);
        void AddProduct(Product product);
        void SaveChanges();
    }
}
