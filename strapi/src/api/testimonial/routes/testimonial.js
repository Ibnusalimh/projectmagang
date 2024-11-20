module.exports = {
  "routes": [
    {
      "method": "POST",
      "path": "/testimonials",
      "handler": "testimonial.create",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "GET",
      "path": "/testimonials",
      "handler": "testimonial.find",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "GET",
      "path": "/testimonial/:id",
      "handler": "testimonial.findOne",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "PUT",
      "path": "/testimonials/:id",
      "handler": "testimonial.update",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "DELETE",
      "path": "/testimonials/:id",
      "handler": "testimonial.delete",
      "config": {
        "policies": [],
        "middlewares": []
      }
    }
  ]
};