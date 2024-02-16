import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { loginStyles as styles } from "@/styles";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useOAuth, useSignIn, useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
// import { ClerkAPIErrorJSON } from "@clerk/types";

enum Strategy {
  GOOGLE = "oauth_google",
  APPLE = "oauth_apple",
}

const Login = () => {
  useWarmUpBrowser();

  // const { isLoaded, signUp, setActive } = useSignUp();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");

  const router = useRouter();

  const { startOAuthFlow: googleOAuth } = useOAuth({
    strategy: Strategy.GOOGLE,
  });
  const { startOAuthFlow: appleOAuth } = useOAuth({ strategy: Strategy.APPLE });

  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.GOOGLE]: googleOAuth,
      [Strategy.APPLE]: appleOAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();

      console.log({ createdSessionId });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.back();
      }
    } catch (error) {
      console.error("OAuth error: ", error);
    }
  };

  // const handleSubmit = async () => {
  //   if (!isLoaded) return;

  //   console.log({ email, password });

  //   try {
  //     await signUp.create({
  //       emailAddress: email,
  //       password,
  //     });

  //     await signUp.prepareEmailAddressVerification({
  //       strategy: "email_code",
  //     });

  //     setVerifying(true);
  //   } catch (err: any) {
  //     console.error("Error:", JSON.stringify(err, null, 2));
  //   }
  // };

  // const handleVerify = async (code: string) => {
  //   if (!isLoaded) return;

  //   try {
  //     const completeSignUp = await signUp.attemptEmailAddressVerification({
  //       code,
  //     });

  //     if (completeSignUp.status !== "complete") {
  //       console.log(JSON.stringify(completeSignUp, null, 2));
  //     }

  //     if (completeSignUp.status === "complete") {
  //       console.log("session id: ", completeSignUp.createdSessionId);

  //       await setActive({ session: completeSignUp.createdSessionId });

  //       router.back();
  //     }
  //   } catch (err: any) {
  //     console.error("Error:", JSON.stringify(err, null, 2));
  //   }
  // };

  const onSignIn = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: email!,
        password,
      });

      if (completeSignIn.status !== "complete") {
        console.log(JSON.stringify(completeSignIn, null, 2));
      }

      if (completeSignIn.status === "complete") {
        await setActive({ session: completeSignIn.createdSessionId });
        router.back();
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={Colors.grey}
        style={[defaultStyles.inputField, styles.mb30]}
        onChangeText={(e) => setEmail(e)}
      />
      {showPassword && (
        <TextInput
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={Colors.grey}
          style={[defaultStyles.inputField, styles.mb30]}
          onChangeText={(e) => setPassword(e)}
        />
      )}
      <TouchableOpacity
        style={[
          defaultStyles.btn,
          ((!email && !showPassword) ||
            (!!email &&
              showPassword &&
              (!password || (!!password && password?.length < 8)))) &&
            styles.inactive,
        ]}
        disabled={
          (!email && !showPassword) ||
          (!!email &&
            showPassword &&
            (!password || (!!password && password?.length < 8)))
        }
        onPress={() => {
          !password ? setShowPassword(true) : onSignIn();
        }}
      >
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.separatorView}>
        <View style={styles.separator} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separator} />
      </View>

      <View style={styles.gap}>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.GOOGLE)}
        >
          <Ionicons
            name="logo-google"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.APPLE)}
        >
          <Ionicons name="logo-apple" style={defaultStyles.btnIcon} size={24} />
          <Text style={styles.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
