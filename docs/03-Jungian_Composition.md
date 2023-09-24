
# 03-Jungian_Composition.md

Trying to figure out how to compose the Jungian images for different grid sizes.

# References

- [https://artignition.com/golden-ratio-in-art/](artignition.com/golden-ratio-in-art/)
- [https://drawpaintacademy.com/golden-ratio-in-art/](drawpaintacademy.com/golden-ratio-in-art/)
- [https://artincontext.org/golden-ratio-in-art/](artincontext.org/golden-ratio-in-art/)

# 0. Goal

The Golden Ratio is based on the Fibonacci Sequence:

- 0, 1,        1,        2,        3,        5,        8,        13,         21,          34, ...
- 0, 1, [0+1=] 1, [1+1=] 2, [1+2=] 3, [2+3=] 5, [3+5=] 8, [5+8=] 13, [8+13=] 21, [13+21=] 34, ...

## 0.1. The Big Picture

- Given distances `a` and `b`, where `a` is smaller than `b`
- Want the ratio of `a : b` to be the same as the ratio of `b : a+b`

## 0.2. The Equations

Using mathematical equations:

```
 a      b
--- = -----
 b     a+b
```

## 0.3. Computed Values

As `a` and `b` approach infinity:

- Golden Ratio: 1 to 1.618
  - Inverted: 1/1.618 = 0.618
  - Hmmm, seeing ".618" twice there - I don't think that's a coincidence...

## 0.4. Example Diagrams

**Note:** subsection *0.5. Canonical Computed Ratios* contains the actual ratios, `a/b` and `b/(a+b)`.

```
 ....5....1....5
 a=3  b=5
|---|-----|
|========|
 a+b = 8
```
```
 ....5....1....5....2....5
   a=8           b=13
|--------|-------------|
|=====================|
      a+b = 21
```
```
          1         2         3         4
 ....5....0....5....0....5....0....5....0
     a=13           b=21
|-------------|---------------------|
|==================================|
         a + b = 34
```
```
          1         2         3         4         5         6
 ....5....0....5....0....5....0....5....0....5....0....5....0
         a=21                   b=34
|---------------------|----------------------------------|
|=======================================================|
         a + b = 55
```
```
         1         2         3         4         5         6         7         8         9
....5....0....5....0....5....0....5....0....5....0....5....0....5....0....5....0....5....0....5
                 a=34                                     b=55
|----------------------------------|-------------------------------------------------------|
|=========================================================================================|
                              a + b = 89
```

## 0.5. Canonical Computed Ratios

The ratios get closer the further we go along the Fibonacci Sequence:

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

- a=34, b=55:
  - a:b = 34/55   = 0.6181
  - b:a+b = 55/89 = 0.6180

- a=55, b=89:
  - a:b = 55/89    = 0.6180
  - b:a+b = 89/144 = 0.6181

- a=89, b=144:
  - a:b = 89/144    = 0.6181
  - b:a+b = 144/233 = 0.6180

- a=144, b=233:
  - a:b = 144/233   = 0.6180
  - b:a+b = 233/377 = 0.6180


# 1. Single Line

Using a single line to divide a longer one is what we have above.

# 2. Two Lines

How would we use this idea for two lines?

# 3. Three Lines?

How would we use this idea for three lines, should we want to do that?

# 4. NOTE TO SELF!

**Don't OVER THINK this!  Remember: virtually NO ONE CARES!!**

