module.exports = {
  "routes": [
    {
      "method": "POST",
      "path": "/solutions",
      "handler": "solution.create",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "GET",
      "path": "/solutions",
      "handler": "solution.find",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "GET",
      "path": "/solution/:id",
      "handler": "solution.findOne",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "PUT",
      "path": "/solutions/:id",
      "handler": "solution.update",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "DELETE",
      "path": "/solutions/:id",
      "handler": "solution.delete",
      "config": {
        "policies": [],
        "middlewares": []
      }
    }
  ]
};