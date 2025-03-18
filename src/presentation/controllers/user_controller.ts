export class UserController {
    handle (body: any): any {
        if(!body.name) {
            return {
                statusCode: 400,
                body: new Error('missing parameter name')
            }
        }
    }
}