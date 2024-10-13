export interface Env{

}
export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({
			msg:"hello world"
		})
	},
} satisfies ExportedHandler<Env>;
