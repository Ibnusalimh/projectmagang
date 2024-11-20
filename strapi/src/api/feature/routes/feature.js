module.exports = {
  "routes": [
    {
      "method": "POST",
      "path": "/features",
      "handler": "feature.create",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "GET",
      "path": "/features",
      "handler": "feature.find",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "GET",
      "path": "/feature/:id",
      "handler": "feature.findOne",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "PUT",
      "path": "/features/:id",
      "handler": "feature.update",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "DELETE",
      "path": "/features/:id",
      "handler": "feature.delete",
      "config": {
        "policies": [],
        "middlewares": []
      }
    }
  ]
};