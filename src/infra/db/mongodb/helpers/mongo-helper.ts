import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  url: null as unknown as string,


  async connect(url: string): Promise<void> {
    this.url = url
    this.client = await MongoClient.connect(url)
  },

  async disconnect() {
    await this.client.close()
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  }
}
