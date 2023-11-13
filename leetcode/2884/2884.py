# Title: 2884. Modify Columns
# URL: https://leetcode.com/problems/modify-columns/
# Answered by @referanslar

import pandas as pd

def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
    employees["salary"] = employees["salary"] * 2
    return employees
