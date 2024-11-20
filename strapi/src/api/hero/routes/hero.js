module.exports = {
  "routes": [
    {
      "method": "POST",
      "path": "/hero",
      "handler": "hero.create",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "GET",
      "path": "/hero",
      "handler": "hero.find",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "PUT",
      "path": "/hero",
      "handler": "hero.update",
      "config": {
        "policies": [],
        "middlewares": []
      }
    }
  ]
};