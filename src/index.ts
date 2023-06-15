import { NativeModules } from 'react-native'

export type ReferrerDetails = {
  url: string
  clickTime: string
  appInstallTime: string
  instantExperienceLaunched: boolean
}
export function getReferrer(): Promise<ReferrerDetails> {
  return NativeModules.PlayInstallReferrerModule.getReferrer
}
