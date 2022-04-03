# Write your MySQL query statement below

select
    p1.id
from
    Weather p1
inner join
    Weather p2
on
    p1.recordDate = p2.recordDate + INTERVAL 1 DAY
and
    p1.temperature > p2.temperature
