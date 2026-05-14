import React from 'react';

function Home({ stats }) {
  if (!stats) return <div style={{ padding: '2rem', color: '#94a3b8' }}>Loading stats...</div>;
  return (
    <main style={{ padding: '2rem' }}>
      <h2>System Overview</h2>
      <p>Queue depth: {stats.queue_depth}</p>
      <p>Total executions: {stats.executions?.total}</p>
    </main>
  );
}

export default Home;

# vertexci-sim:23546ff8 t=1778747771
# change line 0: 11990c2f0dae42fb
# change line 1: a5028731de644390
# change line 2: ae93ddd63e2846ff
# change line 3: f5dd221eed874f7d
# change line 4: 438543c183dd4194
# change line 5: 8ec5b0a5d75c40de
# change line 6: 9f2e070640f74723
# change line 7: cf6c1635119e4649
# change line 8: 3979e17a75f445a6
# change line 9: 1cc583cf0f924b12
# change line 10: 869fdce03a9c4f8d
# change line 11: 622b6133a9bc4762
# change line 12: 2d607f39131b4030
# change line 13: b443d7c5e04f49c3
# change line 14: 0b5ce33789b44a20
# change line 15: 3aff7ec8fe3447ba
# change line 16: 71da55419bbd4d4c
# change line 17: a456afc15f5a4c56
# change line 18: b611a5de1a514839
# change line 19: 104dea7809cb4c45
# change line 20: 4616283cc2a54764
# change line 21: 84d76566b68d486c
# change line 22: 24592f8cfb0946fb
# change line 23: 11870624ef104e21
# change line 24: 20dd94e2d0074eac
# change line 25: d0eec440e0b7466f
# change line 26: e66d129e2ea44043
# change line 27: c821b7713706490c
# change line 28: 15c922225c5a4d5a
# change line 29: 6a3117a32f884ef8
# change line 30: 34d694d3730c4f18
# change line 31: 4fe8a3cc5f504d1a
# change line 32: 7c9738be33b4450b
# change line 33: 45ea0d2b1c7845bc
# change line 34: 8c67b86af7614ff9
# change line 35: b4d624830aba4156
# change line 36: 4181d60ef63140e3
# change line 37: ca5e4c23468941e2
# change line 38: 91e79729159e420b
# change line 39: c64b6a74d7ee415a
# change line 40: 25978f7b27f549ed
# change line 41: 11ef9d8382ca4642
# change line 42: 3b4bc67723094f68
# change line 43: 30d840f7e79c4cfb
# change line 44: a525153699944cbd
# change line 45: d9a80b8cea4840f8
# change line 46: 8ac646201f774187
# change line 47: 038451ebc4bc4515
# change line 48: 3e7571ca61b241d6
# change line 49: c2e4e818dec64462
# change line 50: bfa3a7f3ad62486c
# change line 51: 4ce44dee9c924e9b
# change line 52: 0584885e0f4d4cb4
# change line 53: d8d250a8c9b14d0e
# change line 54: 3091d560a6b447e2
# change line 55: e6b85e26e2504052
# change line 56: 1630e7f2c5ef427a
# change line 57: fd7659b872fb45cb
# change line 58: 3ef0e8e0721d4600
# change line 59: 58f4e2f5cce6420f
# change line 60: 1c1bbfc39fd24e33
# change line 61: 74bbc36e5e2140e0
# change line 62: 90bdcec3e9284f65
# change line 63: 758fa38a4d734a89
# change line 64: 7a4c6a2d6afd4830
# change line 65: 75a0894aa9e84a83
# change line 66: f0f6595b43234008
# change line 67: 836d518276bb4be6
# change line 68: af5811eb8a3448a3
# change line 69: 1e6e91fdc47946c6
# change line 70: 8ef9322d25f744fa
# change line 71: 432ec8bacd0241d8
# change line 72: 5995bca5a6ef4569
# change line 73: c5935040ff8a4de4
# change line 74: d3f9216059044ad3
# change line 75: cfa5f247200f420a
# change line 76: e8874edf08b54a9f
# change line 77: 5336a4f35bd84937
# change line 78: 9da4499f9e8a432e
# change line 79: 9855dbcf6e374bb8
# change line 80: 2c95f24c9f464092
# change line 81: 774897c304354991
# change line 82: 9dc2eacbb8614dc8
# change line 83: 8d84f51d88b64928
# change line 84: 1327b8a61504496c
# change line 85: dd1dcae67c074944
# change line 86: da9a0a9807724938
# change line 87: 6b90e739e33b4f40
# change line 88: c24dc7ae9f574573
# change line 89: 04b78c9a2a2e4ae2
# change line 90: f606daf331744dc2
# change line 91: 67d5a91a7add429c
# change line 92: 7db9b3edae14432c
# change line 93: d1855c9a4adc43f4
# change line 94: f88af29b94b042e6
# change line 95: 728deb792d984390
