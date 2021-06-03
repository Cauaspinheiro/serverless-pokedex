import { NextApiHandler, NextApiResponse } from 'next'
import region_indexes from '../../utils/region_indexes'

const PokemonsRequestHandler: NextApiHandler = async (req, res) => {
  const { region: regionQuery } = req.query

  if (!regionQuery) return invalidRegion(res)

  const region = getRegionName(regionQuery)

  try {
    const data = await getRegion(region)

    return success(res, data)
  } catch (error) {
    return invalidRegion(res)
  }
}

function getRegionName(regionQuery: string | string[]): string {
  if (Array.isArray(regionQuery)) {
    const region = regionQuery[0]

    return getRegionByNameOrIndex(region)
  }

  return getRegionByNameOrIndex(regionQuery)
}

function getRegionByNameOrIndex(regionQuery: string) {
  const regionQueryNumber = Number(regionQuery)

  if (Number.isNaN(regionQueryNumber)) return regionQuery

  return region_indexes[regionQueryNumber]
}

function invalidRegion(res: NextApiResponse) {
  res.statusCode = 400
  return res.json({ error: 'INVALID REGION' })
}

function success(res: NextApiResponse, data: any) {
  res.statusCode = 200
  return res.json(data.default)
}

async function getRegion(region: string) {
  return import(`../../data/${region}.json`)
}

export default PokemonsRequestHandler
