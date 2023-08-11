for t in range(int(input())):
    lst=map(int,input().split())
    lst=list(lst)
    sum=0
    for i in lst:
        sum=sum+i
    if sum<=6:
        print("NO")
    else:
        print("YES")
        