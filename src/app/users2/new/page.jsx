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

const NewUserPage = () => {
    const onSubmit =(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const newUser = Object.fromEntries(formData.entries());
        console.log('new user data', newUser);

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