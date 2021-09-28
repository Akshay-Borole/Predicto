import json
import csv
import os
import numpy as np
import sys
import pandas as pd

def fun(date,number_of_companies):
    # print(date)
    f = open("sam.txt","r")
    data=(f.readlines())
    company=[]
    p_change=[]
    for line in data:
        filename="HISTORY/"+line.strip()+'.csv'
        # print(filename) 
        file = open(filename)
        csvreader = csv.reader(file)
        # date="2021-09-02"
        # date = input ("Enter date :")
        # print("date is",date)
        header = next(csvreader)
        # print(header)
        for row in csvreader:
            if date==row[0]:
                percentage_change=0
                if row[8]>row[4]:
                    percentage_change=(float(row[8])-float(row[4]))/float(row[4])
                else:
                    percentage_change=-(float(row[4])-float(row[8]))/float(row[4])
                company_name=row[1]
                percentage_change=percentage_change*100
                p_change.append([percentage_change,company_name])
    y=json.dumps(p_change)
    # print(y)

    sorted_multi_list = sorted(p_change, key=lambda x: x[0])

    x=json.dumps(sorted_multi_list[:int(number_of_companies,10)])
    # print(x)
    file.close()
    return x,sorted_multi_list[:int(number_of_companies,10)]

# a=fun(sys.argv[1],sys.argv[2])
# print(a)

def fun1(date_form,date_to,amount,number_of_companies):
    x,y=fun(date_form,number_of_companies)
    company_name=[]
    p_change=[]
    for e in y:
        # print(e)
        company_name.append(e[1])
    print(company_name)

    amount_each_company=(int(amount)/int(number_of_companies))
    
    new_list=[amount_each_company for i in company_name]
    print(new_list)
    for company in company_name:
        filename="HISTORY/"+company+".csv"
        print(filename)
        df=pd.read_csv(filename)

        for index, row in df.iterrows():
            if row['Date']>date_form and row['Date']<date_to:
                percentage_change=0
                print(row['Date'],row['Close'])
                if row[8]>row[3]:
                    percentage_change=(float(row[8])-float(row[3]))/float(row[3])
                else:
                    percentage_change=-(float(row[3])-float(row[8]))/float(row[3])
                company_name=row[1]
                percentage_change=percentage_change*100
                p_change.append([percentage_change,company_name])
    print(p_change)
        
                
fun1(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4])
