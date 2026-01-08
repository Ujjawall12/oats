import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: [3, "Too Short product Name"],
    },
    imgCover: {
      type: String,
    },
    images: {
      type: [String],
    },
    description: {
      type: String,
      maxlength: [500, "Description should be less than or equal to 500"],
      minlength: [10, "Description should be more than or equal to 10"],
      required: true,
      trim: true,
    },
    // Oats-specific fields
    weight: {
      type: String,
      required: true,
      trim: true,
    },
    nutrition: {
      protein: {
        type: String,
        default: "0g",
      },
      fiber: {
        type: String,
        default: "0g",
      },
      calories: {
        type: String,
        default: "0",
      },
      servingSize: {
        type: String,
        default: "0g",
      },
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    organic: {
      type: Boolean,
      default: false,
    },
    glutenFree: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      default: 0,
      min: 0,
      required: true,
    },
    priceAfterDiscount: {
      type: Number,
      default: 0,
      min: 0,
    },
    quantity: {
      type: Number,
      default: 0,
      min: 0,
    },
    sold: {
      type: Number,
      default: 0,
      min: 0,
    },
    category: {
      type: Schema.ObjectId,
      ref: "category",
      required: true,
    },
    subcategory: {
      type: Schema.ObjectId,
      ref: "subcategory",
      required: true,
    },
    brand: {
      type: Schema.ObjectId,
      ref: "brand",
      required: true,
    },
    ratingAvg: {
      type: Number,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  { timestamps: true ,toJSON: { virtuals: true },toObject: { virtuals: true } }
);

productSchema.post('init',function(doc){

  if(doc.imgCover && doc.images){

    doc.imgCover = `${process.env.BASE_URL || 'http://localhost:3000/'}products/${doc.imgCover}`
    doc.images = doc.images.map((ele)=>{
     return `${process.env.BASE_URL || 'http://localhost:3000/'}products/${ele}`
    })
  }

  
})

productSchema.virtual('reviews', {
  ref: 'review',
  localField: '_id',
  foreignField: 'productId',
});

productSchema.pre(['find','findOne'],function (){
  this.populate('reviews')
})

export const productModel = model("product", productSchema);


