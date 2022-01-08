import p from 'phin'

export async function Request(url: string) {
  const res = await p({
    url,
    parse: 'json',
  })

  console.log(res)
  return res
}

export async function Post(url: string, data: object) {
  const res = await p({
    url,
    method: 'POST',
    parse: 'json',
    data,
  })

  console.log(res)
  return res
}
