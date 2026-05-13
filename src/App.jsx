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

# vertexci-sim:33472bdb t=1778700484
# change line 0: cf202dc77b8a497f
# change line 1: 8da03491a7424874
# change line 2: 5a85c39478ad477b
# change line 3: a024a1fa2f42404c
# change line 4: e3f08581631440f4
# change line 5: e62862a65ac04cf2
# change line 6: 250ab707fbb341f2
# change line 7: f5e4effc9f3d4b0c
# change line 8: 171bb2e5ad4c4c0a
# change line 9: 9b36ea8fe0b54978
# change line 10: e8e10ade015246a7
# change line 11: d46f5d0b71b4433f
# change line 12: f1c674c75eaa4200
# change line 13: 9eb3b29c14364046
# change line 14: be7d31c2522f47af
# change line 15: 3a9aa5516d1442cc
# change line 16: f719259ff3ab47b8
# change line 17: 599cca3517a446bc
# change line 18: 0501bcada3f84a61
# change line 19: b210ce5071744a07
# change line 20: ab4d5712a9cf4e7a
# change line 21: 5fb18db454c54b9a
# change line 22: 621d6b8c242346dd
# change line 23: 84a79fc51f0546fd
# change line 24: bb2275bcde514ba4
# change line 25: 70a41d529d1d423c
# change line 26: f27ee1c4a51143eb
# change line 27: 6a2dc81bfbaf4472
# change line 28: 3fb50028bd254d62
# change line 29: 39dba5b78c7f48ad
# change line 30: a42705b3ea0a4a4a
# change line 31: 14e90294f14543d9
# change line 32: fe9038a4ad1948f8
# change line 33: 78cb7323dd944028
# change line 34: c81ae236514d44e8
# change line 35: e9fc399467c04147
# change line 36: 9ef189991e6f483d
# change line 37: 9480eeded0644746
# change line 38: c7059f93f5324a9f
# change line 39: dcb2cc625f2542af
# change line 40: c14b8a4b029c48eb
# change line 41: 02c990873c20461e
# change line 42: 674788db73b2459c
# change line 43: d2779fa7548f4811
# change line 44: 2181d77169d24612
# change line 45: a2e78660d6a44542
# change line 46: adae530ab84e4fa0
# change line 47: 1e217984b9bb4550
# change line 48: 0877bb17e9b54257
# change line 49: f7432d1e1752405c
# change line 50: fa1c7b7edff14490
# change line 51: e8698b123c4946eb
# change line 52: 623e9995a10b41a1
# change line 53: 6c3340189e2e4bc7
# change line 54: 9b542a0014464057
# change line 55: 80e1c20fc8234a37
# change line 56: 6689953f4f5c4019
# change line 57: 6a258e3f003d40ff
# change line 58: 57a894f2114f401d
# change line 59: 82277934c15d42a1
# change line 60: 2e0cfc72fcec4baa
# change line 61: d773fcb3e3b04d88
# change line 62: 06c10f7cd6914115
# change line 63: b00cd56dfb7b4df7
# change line 64: f1ac16cb02624843
# change line 65: 951a091b8a794390
# change line 66: ca0eda7e8934481c
# change line 67: 5c6942ef0bbd4452
# change line 68: d64b4cdc84844e53
# change line 69: c891e870e7b54647
# change line 70: 9002235dc83e4656
# change line 71: 9b240f2a3b7041b5
# change line 72: 50fe1babd1924c04
# change line 73: e88a8cb72b4b4433
# change line 74: e616d9a601374a6b
# change line 75: 9b4feb0e530143fe
# change line 76: 124d40d4a1664d8d
# change line 77: 0a128204617e478b
# change line 78: 2539f4a6349f400e
# change line 79: aeb3187a1af14dd2
# change line 80: 97533c44ff4741eb
# change line 81: 67d0eb47f217478d
# change line 82: 1b5a127aa3c44f8f
# change line 83: bd96c546782d4b9d
# change line 84: 7f05639928b14922
# change line 85: aed9f5576af74d6f
# change line 86: de12abb3a8af4afd
# change line 87: 5ef831e0c68842e8
# change line 88: 75952686eb0b49e2
# change line 89: b0e76f7e28bb404e
# change line 90: d587e422ff7d4500
# change line 91: d10bb07154f74c61
# change line 92: d0e7e825ce724693
# change line 93: 1612dd0e64274ed5
# change line 94: 834d7ecf26084461
# change line 95: 0c7ab649a56541f5
# change line 96: 9e452b82595a4515
# change line 97: f8389eade73342b9
# change line 98: c2bedcb4023a46b9
# change line 99: a89ec0b39ce5426c
# change line 100: 5e4330a1eaeb4647
# change line 101: b703ea1d886e45cb
# change line 102: c5de21b152f7473a
# change line 103: c88cae1d03454727
# change line 104: 540861a23930471e
