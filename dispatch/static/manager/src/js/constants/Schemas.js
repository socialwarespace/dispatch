import { Schema, arrayOf } from 'normalizr'

export const sectionSchema = new Schema('sections')
export const personSchema = new Schema('persons')
export const topicSchema = new Schema('topics')
export const tagSchema = new Schema('tags')
export const imageSchema = new Schema('images')
export const articleSchema = new Schema('articles')
export const pageSchema = new Schema('pages')
export const templateSchema = new Schema('templates')
export const fileSchema = new Schema('files')
export const gallerySchema = new Schema('galleries')
export const zoneSchema = new Schema('zones')
export const widgetSchema = new Schema('widgets')
export const eventSchema = new Schema('events')
export const userSchema = new Schema('users')
export const videoSchema = new Schema('videos')

articleSchema.define({
  section: sectionSchema,
  authors: arrayOf({
    person: personSchema
  }),
  tags: arrayOf(tagSchema),
  topic: topicSchema,
  template: templateSchema,
  featured_image: {
    image: imageSchema,
  }
})

pageSchema.define({
  template: templateSchema,
  featured_image: {
    image: imageSchema,
  }
})

imageSchema.define({
  authors: arrayOf({
    person: personSchema
  }),
})

zoneSchema.define({
  widget: widgetSchema
})

userSchema.define({
  person: personSchema
})
