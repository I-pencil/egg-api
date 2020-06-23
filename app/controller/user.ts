import { Controller } from 'egg';

export default class UserController extends Controller {
  async findPage() {
    const { ctx } = this;
    const params = {
      limit: ctx.helper.parseInt(ctx.query.page),
      offset: ctx.helper.parseInt(ctx.query.size),
    };
    ctx.body = await ctx.service.user.findPage(params);
  }
}
