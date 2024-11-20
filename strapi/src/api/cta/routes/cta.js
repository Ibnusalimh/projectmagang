module.exports = {
  "routes": [
    {
      "method": "POST",
      "path": "/cta",
      "handler": "cta.create",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "GET",
      "path": "/cta",
      "handler": "cta.find",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "PUT",
      "path": "/cta",
      "handler": "cta.update",
      "config": {
        "policies": [],
        "middlewares": []
      }
    }
  ]
};