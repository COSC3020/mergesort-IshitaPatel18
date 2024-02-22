// Geeks for Geeks was used to understand the mechanics of the iteration of the for loops in mergesort
// The merge code was taken from the slides

function mergesort(array)
{
  let size = array.length;
  let tmp = Array(size).fill(0);

  for(let i = 1; i <= size - 1; i *= 2 )
    {
      for(let leftS = 0; leftS < size - 1; leftS += 2 * i)
        {
          let mid = leftS + i - 1;
          let rightE = Math.min(leftS + 2 * i - 1, size - 1);

          tmp = merge(array, leftS, mid, rightE, tmp);
        }
    }
  return array; 
}

function merge(array, leftS, mid, rightE, tmp)
{
  let a = leftS, b = mid + 1;
  for(var k = leftS; k <= rightE; k++)
  {
    if(a <= mid && (b > rightE || array[a] < array[b]))
    {
      tmp[k] = array[a++];
    }
    else
    {
      tmp[k] = array[b++];
    }
  }

  for(let k = leftS; k <= rightE; k++)
  {
    array[k] = tmp[k];  
  }
  return tmp;
}
