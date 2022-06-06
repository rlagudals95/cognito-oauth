const ns = 'KakaoAuthDemo'

export const AmplifyConfig = {
  Auth: {
    region: 'ap-northeast-2',
    userPoolId: 'ap-northeast-2_3vqUf4M6J',           // TODO: replace with actual userpoolid
    userPoolWebClientId: '3mni12kdjkufo56d5j3be05ohn',  // TODO: replace with actual clientid
  },
}

const ApiHash = 'mk0ob7vf2h' // TODO: replace with actual api url
export const ApiUrl = `https://${ApiHash}.execute-api.ap-northeast-2.amazonaws.com`

export const IdentityProvider = {
  Kakao: {
    AppKey: `4205e8829366343b39451e3d60099dbe`, // TODO: replace with actual kakao client id 5cab2e032e90531d959a321a800373e5
  }
}