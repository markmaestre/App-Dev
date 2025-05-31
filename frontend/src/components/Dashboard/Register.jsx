import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/authSlice';


const RegisterScreen = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    bod: '',
    gender: '',
    address: '',
  });

  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  const handleRegister = () => {
    dispatch(registerUser(form));
  };

  return (
    <View>
      <TextInput placeholder="Username" value={form.username} onChangeText={(val) => setForm({ ...form, username: val })} />
      <TextInput placeholder="Email" value={form.email} onChangeText={(val) => setForm({ ...form, email: val })} />
      <TextInput placeholder="Password" value={form.password} secureTextEntry onChangeText={(val) => setForm({ ...form, password: val })} />
      <TextInput placeholder="Birthdate" value={form.bod} onChangeText={(val) => setForm({ ...form, bod: val })} />
      <TextInput placeholder="Gender" value={form.gender} onChangeText={(val) => setForm({ ...form, gender: val })} />
      <TextInput placeholder="Address" value={form.address} onChangeText={(val) => setForm({ ...form, address: val })} />

      <Button title={loading ? "Registering..." : "Register"} onPress={handleRegister} />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};

export default RegisterScreen;
