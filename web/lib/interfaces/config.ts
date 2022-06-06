const ns = 'KakaoAuthDemo'

export const AmplifyConfig = {
  Auth: {
    region: 'ap-northeast-2',
    userPoolId: '',           // TODO: replace with actual userpoolid
    userPoolWebClientId: '',  // TODO: replace with actual clientid
  },
}

const ApiHash = 'mk0ob7vf2h' // TODO: replace with actual api url
export const ApiUrl = `https://${ApiHash}.execute-api.ap-northeast-2.amazonaws.com`

export const IdentityProvider = {
  Kakao: {
    AppKey: `5cab2e032e90531d959a321a800373e5`, // TODO: replace with actual kakao client id
  }
}