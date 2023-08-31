import 'react-native-url-polyfill/auto'
import * as SecureStore from 'expo-secure-store'
import { createClient } from "@supabase/supabase-js";

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key)
  },
}

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.EXPO_PULBIC_SUPABASE_ANON_KEY as string;
const SBKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0bnV5amVpb29jZHBxZW9lY3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzNTI4MTksImV4cCI6MjAwODkyODgxOX0.bbTtan1J4rW7gAlckb9slBR3Xw0V3KeRrGte3EKssKk"
console.log('process.env: ', process.env);

console.log('supabaseUrl: ', supabaseUrl);
console.log('supabaseKey: ', supabaseKey)


// Better put your these secret keys in .env file
export const supabase = createClient(supabaseUrl, SBKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
