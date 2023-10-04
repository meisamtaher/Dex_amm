import dotenv from 'dotenv'

dotenv.config()

type IEnvVars =
  | 'WALLET_KEY'
  | 'FEE_SETTER_ADDRESS'
  | 'FACTORY_OWNER_ADDRESS'
  | 'FIRST_TOKEN_ADDRESS'
  | 'FIRST_TOKEN_NAME'
  | 'FIRST_TOKEN_SYMBOL'
  | 'SECOND_TOKEN_ADDRESS'
  | 'SECOND_TOKEN_NAME'
  | 'SECOND_TOKEN_SYMBOL'
  | 'DEX_FACTORY_ADDRESS'

export function useEnv(key: IEnvVars | IEnvVars[], _default = ''): string {
  if (typeof key === 'string') {
    return process.env[key] ?? _default
  }
  if (typeof key === 'object') {
    for (const s of key) {
      if (process.env[s]) {
        return process.env[s]!
      }
    }
  }
  return _default
}
