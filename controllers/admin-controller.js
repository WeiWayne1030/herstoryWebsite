const adminServices = require('../services/admin-services')
const { Item, Stock, Color, Size, Order, User } = require('../models')
const helpers = require('../_helpers')

const adminController = {
   signIn: (req, res, next) => {
      adminServices.signIn(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
   delItem: (req, res, next) => {
      adminServices.delItem(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
  removeItem: (req, res, next) => {
      adminServices.removeItem(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
  postItem: (req, res, next) => {
      adminServices.postItem(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
  postStock: (req, res, next) => {
      adminServices.postStock(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
  getAdminItems: (req, res, next) => {
    adminServices.getAdminItems(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
  getOrders: (req, res, next) => {
    adminServices.getOrders(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
  getOrder: (req, res, next) => {
    adminServices.getOrder(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
  putStock: (req, res, next) => {
    adminServices.putStock(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
  postCategory: (req, res, next) => {
    adminServices.postCategory(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
  postColor: (req, res, next) => {
    adminServices.postColor(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
  postSize: (req, res, next) => {
    adminServices.postSize(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
  postMethod: (req, res, next) => {
    adminServices.postMethod(req, (err, data) => err ? next(err) : res.status(200).json(data))
  },
}

module.exports = adminController