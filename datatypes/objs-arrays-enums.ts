enum Role {ADMIN, READ_ONLY, AUTHOR};

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role
} = {
    name: 'Aniket',
    age: 20,
    hobbies: ['Sports', 'Coding', 'Music'],
    role: Role.AUTHOR
}

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
    console.log("is author");
}