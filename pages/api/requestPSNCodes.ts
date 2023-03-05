import type { NextApiRequest, NextApiResponse } from 'next'

type ResData = {
  PSNCodes?: string[]
  message?: string
}

export default function requestPSNCodes(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  const { s } = req.query

  if(typeof s === "string") {
    const validSecret = process.env.VALID_SECRET
    if(validSecret === s) {
        res.status(200).json({ PSNCodes: [process.env.FIRST_PSN_CODE as string, process.env.SECOND_PSN_CODE as string] })
    } else {
        res.status(400).json({ message: "invalid secret" })
    }
  }

  res.status(400)
}