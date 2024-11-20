module.exports = {
  "routes": [
    {
      "method": "POST",
      "path": "/benefit",
      "handler": "benefit.create",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "GET",
      "path": "/benefit",
      "handler": "benefit.find",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "PUT",
      "path": "/benefit",
      "handler": "benefit.update",
      "config": {
        "policies": [],
        "middlewares": []
      }
    }
  ]
};