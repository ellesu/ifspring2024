maxStack(B,i,j)
    b <- 1D array of all boxes sorted by non-decreasing base area
    max_heights <- int array of size n x n
    max <- 0
    if arr[i][j]
        return arr[i][j]
    without <- maxStack(B,i-1,j)
    if (j == -1) or (boxes[i].width < boxes[j].width and boxes[i].depth < boxes[j].depth):
        max <- b[i].height + maxStack(b, i - 1, i)

    arr[i][j] = max(without, max)
    return arr[i][j]


    for i from 0 to b.length:
        heights[i] = boxes[i].height
    
    for i from 0 to b.length-1:
        for j from 0 to i-1:
            if boxes[i].width < boxes[j].width and boxes[i].depth < boxes[j].depth:
                max_heights[i][j] = heights[j] + boxes[i].height
            else:
                max_heights[i][j] = 0
    
    for i from 0 to n-1:
        for j from 0 to i-1:
            if max_heights[i][j] > 0:
                heights[i] = max(heights[i], max_heights[i][j])
                max_height = max(max_height, heights[i])
    StackOfBoxes(boxes):
    Sort boxes by non-decreasing base area
    n = length(boxes)
    memo = array of size n
    
    for i from 0 to n-1:
        memo[i] = -1
    
    max_height = 0
    for i from 0 to n-1:
        max_height = max(max_height, StackHeight(boxes, i, memo))
    
    return max_height

StackHeight(boxes, idx, memo):
    if memo[idx] != -1:
        return memo[idx]
    
    max_height = 0
    for j from 0 to idx-1:
        if boxes[idx].width < boxes[j].width and boxes[idx].depth < boxes[j].depth:
            max_height = max(max_height, StackHeight(boxes, j, memo))
    
    memo[idx] = max_height + boxes[idx].height
    return memo[idx]

    return max

    
    arr <- int array of size nxn
    maxStack(boxes, i, j):
    if i < 0:
        return 0

    if memo[i][j] is not undefined:
        return memo[i][j]

    withoutCurrent = maxStack(boxes, i - 1, j, memo)
    
    withCurrent = 0
    if (j == -1) or (boxes[i].width < boxes[j].width and boxes[i].depth < boxes[j].depth):
        withCurrent = boxes[i].height + maxStack(boxes, i - 1, i, memo)

    memo[i][j] = max(withoutCurrent, withCurrent)
    return memo[i][j]


tas <- sorted 1d array of TAs by non-decreasing start times
cost <- hourly wage of TAs
help(i, S, F, total):
    if S >= F:
        return 0

    if total[i] != 0
        return total[S]

    min <- inf
    if tas[i].start <= S and S < tas[i].finish
        nextStat <- tas[i].finish
        cost <- cost * (tas[i].finish - S) + help(i+1,nextStat, F)
        min <- min{min, cost * (tas[i].finish - S) + help(i+1,nextStat, F, total), help(i+1,S,F,total)}
    total[S] <- min
    return min