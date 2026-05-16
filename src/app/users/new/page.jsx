"use client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const NewUserPage = () => {
    const onSubmit =async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const newUser = Object.fromEntries(formData.entries());
        console.log('new user data', newUser);

        const req = await fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        const res = await req.json();
        // console.log('created user', res)
        if(res.success){
            alert('User created successfully');
            redirect('/users');
        }

    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Fieldset className="w-sm">
                    <Fieldset.Legend>Profile Settings</Fieldset.Legend>
                    <Description>Update your profile information.</Description>
                    <Fieldset.Group>
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="John Doe" variant="secondary" />
                            <FieldError />
                        </TextField>
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" variant="secondary" />
                            <FieldError />
                        </TextField>
                    </Fieldset.Group>
                    <Fieldset.Actions>
                        <Button type="submit">
                            <FloppyDisk />
                            Create Post
                        </Button>
                        <Button type="reset" variant="primary">
                            Cancel
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
};

export default NewUserPage;