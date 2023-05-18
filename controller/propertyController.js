const Property = require('../model/propertyModel')

exports.propertys = async (req, res) => {
    const addProperty = await Property.create({
      property_name: req.body.property_name,
      property_type: req.body.property_type,
      property_category: req.body.property_category,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      property_price: req.body.property_price,
      property_description: req.body.property_description,
      status: req.body.status,
      property_images: req.files
    });
      if (!addProperty) {
        res.status(500).send(err);
      } else {
        res.status(201).send(addProperty);
      }
  }


exports.getProperty = async (req, res) => {
    const property_category = req.query.property_category;
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const min_price = req.query.min_price;
    const max_price = req.query.max_price;
    const filter = {};
  if (property_category) {
      filter.property_category = property_category;
    }
    if (longitude && latitude) {
      filter.$or = [{ latitude: latitude }, { longitude: longitude }];
    }
    if (min_price && max_price) {
      filter.property_price = { $gte: min_price, $lte: max_price };
    } else if (min_price) {
      filter.property_price = { $gte: min_price };
    } else if (max_price) {
      filter.property_price = { $lte: max_price };
    }
    console.log(filter,"<=====")
    let properties =  await Property.find(filter)
      if (!properties) {
        res.status(500).send(err);
      } else {
        res.send(properties);
      }
  }