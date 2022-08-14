// 이진탐색

// 문제 

// 이진탐색을 구현 해 봅시다! 배열 arr과 찾으려는 값 k가 주어집니다. 

// k를 찾는다면 k를 반환하고 찾지 못한다면 false를 반환합니다.

// 조건

// 이진탐색을 구현합니다!

// 힌트

// 1. 이진탐색의 필수 조건은 정렬입니다.

// 2. 이진탐색은 항상 중간값이 필요합니다.

// 3. 찾으려는 값이 중간값보다 작다면 중간값의 왼쪽을, 크다면 중간값의 오른쪽을 찾아봅니다.

// 4. 값을 찾을 때 까지 반복합니다. 단!! 찾으려는 값이 없다면 다른 값을 반환해야 합니다! 이는 곧 start >= end 인 상태라는 것을 기억하세요!

// 예시

//1. 문제가 arr =[1,2,3,4,5,6,7,8,9]이고 찾으려는 값이 2 라면 배열의 길이 9를 2로 나눈(소수점 버림) 4번 인덱스(5)를 mid로 지정합니다.

//1-1 start와 end에 어떤값이 들어갈지 잘 생각해보세요! 소수점 버림은 Math.floor 를 이용할 수 있습니다.

//2. 찾으려는 값인 2는 5보다 작으므로 배열을 [1,2,3,4]로 축소합니다. 이는 start를 그대로 두고 end를 mid-1로 바꿈으로써 구현할 수 있습니다.

//2-1 찾으려는 값이 5보다 크다면 start를 mid +1 로 변경하게 됩니다.

//3. 이번엔 배열의 길이인 4를 2로 나누어 2번 인덱스(3)를 mid로 지정합니다.

//4. 찾으려는 값인 2는 3보다 작으므로 배열을 [1,2] 로 축소합니다.

//5. 배열의 길이인 2를 2로 나누어 mid를 1로 지정합니다.

//6. 찾으려는 값인 2는 1번 인덱스(2)와 같으므로 2를 return 합니다.

//7  만약 찾으려는 값이 2가 아닌 100 같은 배열에 없는 숫자라면?? start >= end 인 상태가 되겠죠??
const solution2 = (arr, k, start, end) => {
        
}
//타겟이 중간값보다 작은경우
let arr = [1,2,3,4,5,6,7,8,9,10]
let tartget = 2
console.log(solution2(arr , tartget, 0, arr.length)  === tartget)

//타겟이 중간값보다 큰 경우
arr = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]
tartget = 21
console.log(solution2(arr , tartget, 0, arr.length)  === tartget)

//타겟이 배열에 없는 경우
arr = [1,2,3,4,5,6,7,8,9,10]
tartget = 99
console.log(solution2(arr , tartget, 0, arr.length) === false)
