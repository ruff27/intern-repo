#33

📌 Role-Based Authorization (RBAC) in NestJS
🎯 Goal
Learn how to implement role-based access control (RBAC) in NestJS using Auth0.

✅ Why is this important?
Focus Bear’s backend requires different levels of access for different users. RBAC ensures that only authorized users can access specific features (e.g., admin vs. regular user).

✅ Tasks

Research how role-based access control (RBAC) works in Auth0
Auth0 manages RBAC by assigning roles (e.g. admin, user) to users.
Roles can be mapped to permissions and included in the access token as custom claims. Backend services read these roles from the token and decide whether a user is authorized to access a resource.

Explore how to retrieve user roles from Auth0’s access token
In a real application, roles are exposed via an Auth0 Action and appear in the JWT payload:
{
  "sub": "auth0|123",
  "email": "user@example.com",
  "roles": ["admin"]
}

Implement a NestJS guard to enforce role-based authorization
@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return user?.roles?.includes('admin');
  }
}


Protect an API endpoint based on user roles (e.g., allow only admins to access it)
@Controller('admin')
@UseGuards(RolesGuard)
export class AdminController {
  @Get()
  getAdminData() {
    return { message: 'Admin-only access granted' };
  }
}



✅ Reflection (nestjs-rbac.md)
How does Auth0 store and manage user roles?
Auth0 stores roles centrally and assigns them to users. These roles can be added to access tokens so backend services can enforce role-based authorization.

What is the purpose of a guard in NestJS?
A guard determines whether a request is allowed to proceed. Guards are commonly used to implement authentication and authorization logic.

How would you restrict access to an API endpoint based on user roles?
Access can be restricted by checking user roles from the request or token and allowing access only if the required role is present.

What are the security risks of improper authorization, and how can they be mitigated?
Improper authorization can allow unauthorized access to sensitive data or actions. These risks can be mitigated by enforcing role checks on the backend and following the principle of least privilege.
