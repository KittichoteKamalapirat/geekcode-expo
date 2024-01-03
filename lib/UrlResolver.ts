console.log(
  "EXPO_PUBLIC_NESTJS_HTTP_API_URL",
  process.env.EXPO_PUBLIC_NESTJS_HTTP_API_URL
);

class UrlResolver {
  index() {
    return "/";
  }

  jotobaPost() {
    return "https://jotoba.de/api/search/words";
  }

  // API
  uploadToStorage() {
    return `${process.env.EXPO_PUBLIC_NESTJS_HTTP_API_URL}/storage/upload`;
  }

  grade() {
    return `${process.env.EXPO_PUBLIC_NESTJS_HTTP_API_URL}/gstt/grade`;
  }

  staticFilePathOnServer(path: string) {
    return `${process.env.EXPO_PUBLIC_NESTJS_HTTP_API_URL}${path}`;
  }

  graphql() {
    return `${process.env.EXPO_PUBLIC_NESTJS_HTTP_API_URL}/graphql`;
    // return `http://localhost:4007/graphql`;
  }
  graphqlSocket() {
    return `${process.env.EXPO_PUBLIC_NESTJS_WEB_SOCKET_API_URL}/graphql`;
  }

  nativeYouglish(search: string) {
    return `https://youglish.com/pronounce/${search}/japanese?`;
  }

  feedback() {
    return "https://docs.google.com/forms/d/e/1FAIpQLSefBWZ-mJVp4ork3UB_H7G-W-JGacDQlfNUlQeZqCwmRwD1Jg/viewform?usp=sf_link";
  }

  cloudStorageNativeAudio(filename: string) {
    // TODO: move to env?
    const bucketName = "shaberi-audio-files";
    const folder = "assets/audio-by-native";
    return `https://storage.googleapis.com/${bucketName}/${folder}/${filename}`;
  }
}

export const urlResolver = new UrlResolver();
