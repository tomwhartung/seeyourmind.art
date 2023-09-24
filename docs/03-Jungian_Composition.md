
# 03-Jungian_Composition.md

Trying to figure out how to compose the Jungian images for different grid sizes.

# References

- [https://artignition.com/golden-ratio-in-art/](artignition.com/golden-ratio-in-art/)
- [https://drawpaintacademy.com/golden-ratio-in-art/](drawpaintacademy.com/golden-ratio-in-art/)
- [https://artincontext.org/golden-ratio-in-art/](artincontext.org/golden-ratio-in-art/)

# 0. Goal

## 0.1. The Basic Math

The Golden Ratio is based on the Fibonacci Sequence:

- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
- 0, 1, [0+1=] 1, [1+1=] 2, [1+2=] 3, [2+3=] 5, [3+5=] 8, [5+8=] 13, [8+13=] 21, [13+21=] 34, ...

- Golden Ratio: 1 to 1.618
  - Inverted: 1/1.618 = 0.618

## 0.1. Using Ratios

### 0.1.1. Given:

```
     a           b
|----------|-----------------|
|============================|
         a + b
         1         2         3         4         5         6         7         8
....5....0....5....0....5....0....5....0....5....0....5....0....5....0....5....0
```

### 0.1.2. Want:

Where `a` is smaller than `b`, want the:

- Ratio of `a : b` to be the same as the ratio of `b : a+b`

```
 a      b
--- = -----
 b     a+b
```

So, the ratios get closer the further we go along the Fibonacci Sequence:

- a=1, b=1:
  - a:b = 1/1   = 1.0
  - b:a+b = 1/2 = 0.5

- a=1, b=2:
  - a:b = 1/2   = 0.5000
  - b:a+b = 2/3 = 0.6667

- a=2, b=3:
  - a:b = 2/3   = 0.6667
  - b:a+b = 3/5 = 0.6000

- a=3, b=5:
  - a:b = 3/5   = 0.6000
  - b:a+b = 5/8 = 0.6250

- a=5, b=8:
  - a:b = 5/8    = 0.6250
  - b:a+b = 8/13 = 0.6154

- a=8, b=13:
  - a:b = 8/13    = 0.6154
  - b:a+b = 13/21 = 0.6190

- a=13, b=21:
  - a:b = 13/21   = 0.6190
  - b:a+b = 21/34 = 0.6176

- a=21, b=34:
  - a:b = 21/34   = 0.6176
  - b:a+b = 34/55 = 0.6181


# 1. Single Line


# 2. Two Lines


# 3. Three Lines?



