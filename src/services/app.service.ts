export class AppService {

    
    private users = [
        {
            firstName: 'fname1',
            lastName: 'lname1',
            email: 'abc@gmail.com'
        },
        {
            firstName: 'fname1',
            lastName: 'lname1',
            email: 'abc@gmail.com'
        },
        {
            firstName: 'fname1',
            lastName: 'lname1',
            email: 'abc@gmail.com'
        }
    ];

    public getUsers(): any {
        return this.users;
    }

    public addUser(user: any) {
        return this.users.push(user);
    }

}