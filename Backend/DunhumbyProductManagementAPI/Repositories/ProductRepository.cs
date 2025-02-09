using DunhumbyProductManagementAPI.Data;
using DunhumbyProductManagementAPI.Models;
using System;

namespace DunhumbyProductManagementAPI.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ProductsDbContext _productsDbContext;

        public ProductRepository(ProductsDbContext dbContext)
        {
            _productsDbContext = dbContext;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return _productsDbContext.Products.ToList();
        }

        public Product GetProductById(int id)
        {
            return _productsDbContext.Products.Find(id);
        }

        public void AddProduct(Product product)
        {
            product.DateAdded = DateTime.UtcNow;
            _productsDbContext.Products.Add(product);
        }

        public void SaveChanges()
        {
            _productsDbContext.SaveChanges();
        }
    }
}
