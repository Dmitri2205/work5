import React from "react";

export const Logo = () => {

 return(   
    <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 106 51"
    width="106"
    height="51"
>
  <defs>
    <image
      width="106"
      height="51"
      id="img1"
      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAzCAYAAAB/oJ2oAAAAAXNSR0IArs4c6QAADmxJREFUeF7tnAtwlFWWx3/9yqPTJCQE8kCYmJBAAuoqYrEKcUaYFR9oZhcLd91xdBlXZR1WBwYfIKuBZWTREUZ8jYgMTg0lwogoMiyCs+jwmEGXIASSQEIIIaTzIO90+vH11vk6nXR3+pUQlmDlVlFFfX3u/e49/3vO/d//vV80TqfzNBDLYBnIHmjSOJ3OVsA4kHs52DfaBKgGIG7QGQPaA42DQA1ofLo6NwjUlYETg0ANAnWFeOAK6eZgRA0CdYV44Arp5mBEeQFlboZdx8FuBzSdPzkgKxX+Nr1PmB63WPhLSwto3O15N5NrMnF1ZGSotgeB8vLQ8h2waB0gjnM71g4jRsKRJZDUewHnqYoKVp09CzpdTzAcDlZcfTULk5MHgQrlAa/fl2yDpR8AJo/HCsQZ4dv/gFEJvWpOjOefPcuvzp1zAeVwgNPZ3YbDwS/T03nmuwSU3e7EZlPUQer1GvR6baBs0mtndlV44RN4UYCK8QYqwQQFS+Cq+F63veDsWV4RoLRaHhg2jHTPNOd0MishgWujo0O1O7BT3/nzFo4da6K0tIXq6g4aG204nU5iYvSYTHpSUqLIyYllwoQ4IiK0oQYb+vdLCZRGwzfjx3O9sU+y6sAE6tSpFnbtqubo0Uaam+1qtpAo0mjkHyiKU33mcDjV5yNHRnPbbSPIzR2OTud/0Q6NEnCJgfpdRgZTTCb0Gg0JOh3R2rAn18ACStLb1q2VfP55NW1tDiIjtWi1wR0vgNntigpadnYsDzwwmlGj+jRrLy1QOh06jQaBJkqjUVPgj4YOVYlEGIANHKAaGmy8+24Zhw83qAD1JTIsFgcJCRE89lgGY8cOCSuIvIwuQUTNq6jgtcpKF5lwEwk3VVcUfpiQwNaMDIzBo2tgANXUZGP16hKKi1swGv3Q2F643GpV1PXrZz8bQ1ZWL8G6BEB93NDA8qoqr32U2WbjdEeH65nDwcrvfY8FSUnBRnn5gZL15o03TnHwYP1Fg+QeqYAlkbVw4TiSkkJuJrsddAmA8uf9Orudn5aXs7WuTgUry2jk25wcIgJsimEAqOdCGt5/v5zo6IuLJF+HSBq84YZ45s3LDJ/G/z8BJX3d19JCblERDkVhiF5PQU5OMIXi8kZUfb2d/KWFNDfZ0OuD5zeJPCEbUmT9CrWGyXJgszl54t/GMPHGoeElz0W7YfnvANnXODrrKHAR+6hALz7Q2sqUEydUoEx6PYdzcsgILCX1M1D2Gmg7DDGTQRd6ffjDHypVlhcVpUdx6tBpRWPzLgKQpLK4OAOpqdEqQGazhZoaq/p/oef+isapw9quYWy2kYVPZ6IJELB2p42S9iNUWcuxbt5PzIZDZJakknzefTvBdlFANTsc/LisjBEGg6pACNuTZ3PKy/lQUh+QGR2tpr7IwIQiCFAXPoBzS8HpcMleMpk1Bkh5DhLu9+MbJ5y8B+o+haR/hrT3/U8m8xowv662WVvbgc2uYFOi+OjAPArKczHoOrrqCeU2GDRMm5bE1KnDSUyMUOm6kI+vv77A9u1V1Ndbe2x2NYoea4yZyklr6Ig9x5j0WAwRETyW8jzXmW7uav+P9RtZf/6/OG05TpOjA3ukUGcYVhfFxEOpzHttEqPPxEGCMbAyYXepJV5FthRaDRank7yTJ9lZX6+uRcMiI5kQFUWV3U5xe7uLTNjtrExLuwgyUbUUypeA50yUPpkyIbsAtD6yR916KH24G9TMj2Bonk94NMPRLLCcd9lJupONhQF+v+sZdhY8SJShTa0jkSQR8+ijGVx/vf/Ude5cO6tWlVBX16FKSu6isxmpH7OTE/c+hcYONiu0OeC2+CmsHfslitPBryufYW3Vy+r8i3D51TUfxXd6aIyD+z5MY+UvZkB8lEuU9ZWQVuyE3/wJFM+olt25Dj58FOt1V6nRtKmmRpWQ1CI52YOe3z9iBL9NSwtGJKRWkIhqPwLHbwJFaKSHv2UkWTsh9ofdD23n4fhE6BBNS7wsaX4MZB8CnccFp4YtUDLLZeMuWrBYYsjfspHqhjT0Oqv6S3u7g7vuSmH27FH+I7PzqbDFt98+hcHgC9QOiu+ajzubKqp/dLw/bj+7G7bwWuUKTFoXQP5KmxHyl0xh1uYJ/oF6/U/wxPpOld2zESskJsHBZyE9UXXFGrOZN81mTnZ0IMndoNGQrNczJzGRRSkpqlIRooRYo4pyoelLb8fKGjviIUh7r7vt8jlQvc47+sQu5d9h1Kpuu9JZULvF284Ah0u+z+rP1hCht3RFkzj++edzVD0vWBHCsHRpIZWV7V3rlSui/kjxXT/vAkraEC6SHp1FheUkDhSv+eL5DgFpypcpvDn3HnQOIRMx3qlv2xH4hzWgpj3PlGMHYyTseBJys7y63aYoFFosVNtspBgMKnGI83f04X+wIYAyvwqnf+7dF8kVhuGQcwQMydD0ORTPcLEknwyAJhLG7gbTLWA9A4XXgr3R204P7/73MvYe//uutCcqueh3L7wwPiS7k3GtXVvG3r01XRQ/EFBia5XMJKkuAPoOHejsOtY/NJMJx1KlhotMHF4Co+Lhfytg+stQ3+zK2V1FQHPCb38KD04OFSG9/T0EUNYyOHYNOFq9nSt9ytgACQ9A4fXQesT/yMVuyE0w7iDUvAllc71B10FzSwIvbv6AhtbhXaxPgEpLi2Hx4uyQWp+MeP360+zZYw4LKH8eUumA05UGW0zwyDsTmP/KrYDNlcfjTXByGVgdcOtKKK7oPFx0tyaztwOWzYZFd/YWhHDsw6DnJXdCww5vIGRkCTNdNPzMIm/n+75WbEe9BE27oHG3dzsGOFB4J2/tWkmkvr2rprC92FgD+fnjVTkoVHnllSK+/bZJ1QilBIsoz7aka+0OiNHJPNRQF+NkXKmJjf80i7hGSblioUBSHOx7Gub+HnZ+3bnP8mypHeZMh7UPhupqX38PA6jadVA2p2fECFUX6q4OJkhRab070fjY6mHNp69y6NTtRHayPXVyq4q4k8cfT2fSpOCnqrKnys8vpKND6Yq+cIByOGVRN/BwyjPcNGQaWo2Wwh0buWZxGdcWy/0I955OgeFxMCEFvjjmk+6kt+0w/QbYNheiI/oKRKh6YQBlOweFE8B2wTv9BWpaBSbUe11rcH1jMi98uIl26xC0GrcS4Korm9zRo40sWDCWIUP8R5UA+s47pezbV0tkZPeiHg5QslY9N3o194+Y193ZxbvhPzfIQYSfAQhwvv2ww6R0+GQeJIXe4IfhlUAmYQAlVUtnQ+2m4ClOfYUW9Algqw0NlgH2fDOLDXvzvaLJs6cdHQ7GjYvloYfSSE72dl5rq53Nmyv54guzuuH1ZLihgLIqkGnMYmNOAREaj3b9an1qjHd2y3cGWuCpu+FX910EBmFVDROoC5vg1OzgzpeASLgTUl6EkmlgbwpuH63lvd3vsufrSRgjXbTcX3HLRzfeGK8eDMom+PTpVv761wsqJfcFSdoIBVSbArlxP+CtrD3er/QLlORIPQhNV2SQnnzR6ZIy3nsE7r8xLI/30ShMoBwNcGwcWKv9O18mnCgV2fsg+m+g+mU484vAHFiWqvgJHG3bw6urK9DpnEEVbiEXsmbJfQkpciQfTOfrX6AUGJkA/3IzLNveGVyekWWHmCj4TPZOmX3EIWS1MIGSdk7PAbPPptbdvky0qxZD6lLXE6cNiqf13Cx72T+LM3U5b715iv376/r1mKPfgUocAkVLIX87rP7Ez3d/Vhg9HHbNh6ygB4AhEQlg0AugGrdDyd09I0qiw5jj2ivpPO7DiYpedAs42vxshHWQfRCME6mrs7JixQlqajr65yaRBLfVSM3VOyjNm49WtkI+pXepr/OY4/iLMNQIt74sewo/FN0CN2TBriddSkb/ll4ApbS4lAVLWbfj1Uwk2t8OiL29Z9eqlkOFzz5LFXYnQfaBrnxfWNikHsVLegt0bBHuuNXsaIkm/vav+PzaR1VhwZcC9AkotzJxsgZueQnMF/xT9bzJqiCrCrP9V3oBlLz0zBNw/vVu9udP9/PsnNIGRVOh5Zvu9UrqjH4Jkp/2GsaBA3WsW1emHvb19Y6erGWiauTdMYbEO/7M3JJ7VGW8X4DyvID50WGYtaZTNfchFwgTnNnfTLCXQLV8CSdyu48yIlIg+xuX5heotHwFRdPB2XnOpI2EnAKIGtujRkFBAxs2lGM2dxAVFfqqmLsBiSKh8tHRevLyUpkxI5k/N3/Kv56YSZT2EgAlL35+Gyzb4nNPXV2gXfrgqz+GJ6f1V0z1EijF4jrOaJMcDaSvg2EPh+5M5UKoXOmyi78NMncHrCNr1ccfV6r0W+72ycGhMDz35Ut3RTmvUhQ5blfUdDl+fCx5eSPJyHCtk3sbPuHxknt6B9RzH8EvN/a8ex4V4yIToz1UEqHreW/Ap/t9dD95u6QNJ2ydD/deF9o/oS16CZQ0WLkIypfDiBkwZrvPviLAG5VmOH4zNB2FzN9A4iMhu1Za2srBg3XqleYLF6yqUiGgyDomp7xyGUaO5zMzTUyePIxrrvH+sL9PQG06BM9u6lx7PL7mkM9uZN0x+dxoks90fvIeFFf5HHeIRK/Asllw38SQYw3DoA9Ayb2Ixs8gdjoYRobxjk4TSxG0/QWGysFhyEvxXe0KQHIHvaXFTlubHatVTn4hPj6CkSONxIii6qf0CSg1GCR1eXxxIc90Ia4eS3T5FtE3w76xHNKNfQAqZJsDw6DPQA2M7vv24rsL1P80bGNuyb0B16ipcd/n7awvBiYsPXv13QXqq8bt/OTE3RgC0PO/i5/KO2P3DgJ1uT3QYK9l1dkF1Nlq8f0SR444Zg77R+6QE+oro3x3I+rK8H/YvRwEKmxXXV7DQaAur//DfrsK1ODf6wvbX5fNUP17fYN/AfOy+T/sFzf9H0P2bq+5R1cyAAAAAElFTkSuQmCC"
      />
  </defs>
  <style></style>
  <use href="#img1" transform="matrix(1,0,0,1,0,0)" />
</svg>
)
}