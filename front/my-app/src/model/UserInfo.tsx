export interface LoginInfo {
  email: string;
  password: string;
}

export interface RegisterInfo {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

export interface UserInfo {
  user: UserData;
}

export interface UserData{
  id: number;
  first_name: string;
  last_name: string;
}

export class User {
  constructor(
    private id: number,
    private first_name: string,
    private last_name: string,
    private userEmail: string = "placeholder@gmail.com",
    private date_of_birth: string = "01.01.2000."
  ) {}

  get fullName() {
    return this.first_name + " " + this.last_name;
  }

  get firstName() {
    return this.first_name;
  }

  get lastName() {
    return this.last_name;
  }

  get email() {
    return this.userEmail;
  }

  get dateOfBirth() {
    return this.date_of_birth;
  }

  get userId() {
    return this.id
  }
  public static createUser(obj:string): User|null {
    if (!obj) {
      return null;
    }
    let user = JSON.parse(obj);
    return new User(user.id, user.first_name, user.last_name, user.userEmail, user.date_of_birth)
  }
}
