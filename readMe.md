# Meta's Security Reversed

This repository will continue to grow, until every single Meta security header / parameter is reversed. All files are ready to be implemented into any automation / scraper, for custom work: **contact on Telegram @Hartman50**

Majority of the files in this repository are very straight foward, and easy to use. I'll explain the setup for more complicated configurations below.

**New Header/Parameter Reversed Every Ten Stars.**

# Configuring __Dyn

1. Inject our own JS into Meta's client. The following code will be injected:
```js
        var bitarray = [];

        for(var x in this.$1) {
            if(this.$1[x]==1) bitarray.push(parseInt(x));
        };

        console.log(bitarray);
```
- This code will be injected into the toCompressedString() function inside Meta's source.
<img width="700" alt="image" src="https://media.discordapp.net/attachments/1115622246774472765/1267175007298125857/Screenshot_2024-07-28_at_1.37.35_PM.png?ex=66a7d430&is=66a682b0&hm=be3db7ff2e5e87e907be94aa1dd76418cff641db0532ddd4265f6d74449f6c0c&=&format=webp&quality=lossless&width=1868&height=1088">
2. Analyze the Local Values, you will notice an object called "bitarray," copy this object.
<img width="700" alt="image" src="https://media.discordapp.net/attachments/1115622246774472765/1267175007641931857/Screenshot_2024-07-28_at_1.37.45_PM.png?ex=66a7d430&is=66a682b0&hm=25ea245f6568cf07ed2740f3af89ad74c73d3b81a045546fb1c9551e6c9dd396&=&format=webp&quality=lossless&width=1868&height=1150">
<img width="700" alt="image" src="https://media.discordapp.net/attachments/1115622246774472765/1267175007910625281/Screenshot_2024-07-28_at_1.37.55_PM.png?ex=66a7d430&is=66a682b0&hm=c67879fa6a7b50f0b1bc7c23c2df666a1f80d234550c40d28b563b8574626046&=&format=webp&quality=lossless&width=1868&height=388">
3. Paste this object into ./dyn.js, at line two, inside of the array.
<img width="700" alt="image" src="https://media.discordapp.net/attachments/1115622246774472765/1267175008216682496/Screenshot_2024-07-28_at_1.38.26_PM.png?ex=66a7d430&is=66a682b0&hm=80b4df38d56199e856d3ac4833fc595fa68f844ea7b9baf8261b8d11619caaee&=&format=webp&quality=lossless&width=1204&height=1262">
4. Run node dyn.js - There is your __dyn value for the request. Every module list is different for every request.

# Contact

Contact me on Telegram - @Hartman50
