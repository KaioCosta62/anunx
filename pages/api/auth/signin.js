import nextConnect from 'next-connect'
import {post,get} from '../../../src/controllers/auth/signin'

const route = nextConnect()

route.post(post)
export default route