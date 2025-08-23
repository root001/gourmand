import {View, Text, Button, TextInput, Alert} from 'react-native';
import {Link, router} from 'expo-router';
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import {useState} from "react";

const SignIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({email: '', password: ''});

    const submit = async () => {
        if(!form.email || !form.password) Alert.alert('Error', 'Please enter a valid email and password.');
        setIsSubmitting(true);
        try {

            Alert.alert('Sucess', 'User signed in successfully.');
            router.replace('/');
        } catch (error) {}
    }

    return (
        <View className="gap-10 bg-white rounded-lg p-5 mt-5">
            <CustomInput
                placeholder="Enter your email address"
                value={''}
                onChangeText={(text) => {}}
                label="Email"
                keyboardType="email-address"
            />
            <CustomInput
                placeholder="Enter your pasword"
                value={''}
                onChangeText={(text) => {}}
                label="Password"
                secureTextEntry={true}
            />
            <CustomButton
                title="Sign In"
            />

            <View className="flex justify-center flex-row gap-2">
                <Text className="base-regular text-gray-100">
                    Don't have an account?
                </Text>
                <Link href="/sign-up" className="base-bold text-primary">
                    Sign Up
                </Link>
            </View>
        </View>
    )
}

export default SignIn