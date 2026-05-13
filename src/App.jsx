import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/stats')
      .then(r => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <Header />
      <Home stats={data} />
    </div>
  );
}

export default App;

# vertexci-sim:1e6ad61e t=1778700166
# change line 0: 2a79005300c14f77
# change line 1: fa58e00c457d44c7
# change line 2: 21b0212ce5384615
# change line 3: 703e090961414830
# change line 4: e17004a5387c4d74
# change line 5: 19205801e42042e7
# change line 6: e586d8d55eb64557
# change line 7: a93a17eb066e4bea
# change line 8: 78b1497c7b794350
# change line 9: 2047461aaf17409b
# change line 10: 7fc5717c95c0407d
# change line 11: f82c42629fa04831
# change line 12: 165f7f756df84a2b
# change line 13: 85e261fc44144740
# change line 14: af3cc0ae8de54530
# change line 15: 666edeb2c17b4c73
# change line 16: 42febf8442104288
# change line 17: 0e3bbab6d7fd4d65
# change line 18: 35694bb3a09f4611
# change line 19: 8ffa4e4c8d2c45be
# change line 20: f0fc65f0a3da46e9
# change line 21: 90a864c6bc1241b0
# change line 22: 907e038d58074a54
# change line 23: 6b872b5611e04327
# change line 24: 3474745d18a6499c
# change line 25: c433bcb51ce44c9d
# change line 26: 0947cf1727a14d3c
# change line 27: 6afc5e4c2b4c4873
# change line 28: e169dc7cde624096
# change line 29: b74a03003ba74695
# change line 30: 997d92780b584854
# change line 31: 07fe7dc3606040c5
# change line 32: 40b848e926364c15
# change line 33: 421264b1d0f44636
# change line 34: c0f66c546d0043a1
# change line 35: 48a21081797b4fd3
# change line 36: 13c38238f8c44b4c
# change line 37: 3237410f151843b1
# change line 38: f0ae39d909e048ab
# change line 39: 25da24f753684fec
# change line 40: 2fbef55eca31442a
# change line 41: adef169a19874412
# change line 42: 9e57088344144bfe
# change line 43: 8941bef7cf3d45a4
# change line 44: 3d18cb4f72894bdd
# change line 45: c00f3b9fa0574b2f
# change line 46: 9d8a08d7619b41bd
# change line 47: 95d8c5fbfeab44fc
# change line 48: bd510873fcd44ebc
# change line 49: beeda47f04654589
# change line 50: 9cd02904cb3c430d
# change line 51: ad98d26b255843d4
# change line 52: 5faaaf694d9f41b3
# change line 53: 77adbfbc6bc349c1
# change line 54: 77656bdfda0640b9
# change line 55: 8dc2b2cf2f354d21
# change line 56: 19f63f3d18764dd9
# change line 57: 8e355c2d08a543eb
# change line 58: dafb0ec22f174475
# change line 59: 32be20637f7e47fd
# change line 60: 12585188d8824992
# change line 61: 7ad5fc0eafc346a7
# change line 62: 7f368ea05eb8403c
# change line 63: d04c2bfe7c6b4149
# change line 64: 581b40ce0b574399
# change line 65: a1f3bd8f43084623
# change line 66: 01443099cb2e4f02
# change line 67: ad145b6f75b143f0
# change line 68: 8f46acee59cf4b7f
# change line 69: 3539e6d01cfd4f26
# change line 70: e049f0f5d5e544ed
# change line 71: 3b9c755c18704d4e
# change line 72: d7c6993e76ce44fc
# change line 73: 59ace12c65fb4f27
# change line 74: 2d0a79ad771d4dac
# change line 75: 9c9ab114de2d4154
# change line 76: c6a26d1b87224b95
