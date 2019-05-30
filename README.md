# TestBlock
- blockchain study 를 위해 개발중인 test blockchain

# test 환경
- windows10
- node 10.15.3
- npm 6.4.1

# dependency module
- express
- bitcoinlib-js
- mocha
- node-express-json-rpc2-async

# install
- nodeJS version 10 이상 설치 필요
    - https://nodejs.org/ko/download/
- windows build 도구 설치
    - npm install --global windows-build-tools
    - https://www.npmjs.com/package/windows-build-tools
- project download
    - git clone https://github.com/leeheejoo/TestBlock.git
- dependency module 설치
    - npm install
- test module 설치
    - npm install mocha --global

# config
- 위치: {Project}/config/config.js
- 설명
    - port : rpc port (default:3000)
    - blockReward : 블록 보상 (default:100)
    - difficultyBits : 난이도 설정 값 (0 ~ 256, default:10)

# 실행
- npm start

# test
- mocha

# project 특징
- 기능
    - account 생성 기능 (account 기반, not utxo)
        - address는 bitcoin legacy p2pkh로 생성
    - transaction 생성 기능
        - transfer 기능 추가
        - 거래 수수료 없음
        - transaction sign 기능 미구현
    - block 생성 기능
        - generateBlock rpc 호출로 생성
        - block 보상(coinbase 보상) 기능 추가
    - block 검증 기능
        - genensys block 부터 chain을 다시 생성하여 기존어 저장된 block hash값을 비교하여 검증
    - consensus 알고리즘
        - pow 사용
    - rpc 기능 
        - json-rpc2, 보안기능 미적용

# apis
    - 테스트 주소 : http://127.0.0.1:3000

    - json-rpc2, post-type, request시 header에 Content-Type : application/json 추가 필요

    - getCoinbaseAddress
        - coinbase address를 조회함
        - header
            - Content-Type : application/json
        - result 
            - coinbase address or error
        - example
            - request body
                { 
                    "jsonrpc": "2.0", 
                    "method": "getCoinbaseAddress", 
                    "id": "1"
                }
            - response body
                {
                    "jsonrpc": "2.0",
                    "id": "1",
                    "result": {
                        "address": "1NBaNVXqcLTFNJ3vdVrdaWJ8eMjkAYixgz"
                    }
                }

    - setCoinbaseAddress
        - coinbase address를 설정함
        - header
            - Content-Type : application/json
        - parameter
            - address
        - result 
            - success or fail or error
        - example
            - request body
                { 
                    "jsonrpc": "2.0", 
                    "method": "setCoinbaseAddress", 
                    "params" : {"address":"1NBaNVXqcLTFNJ3vdVrdaWJ8eMjkAYixgz"},
                    "id": "1"
                }
            - response body
                {
                    "jsonrpc": "2.0",
                    "id": "1",
                    "result": "success"
                }

    - getNewAddress
        - 새로운 account(address)를 생성함
        - header
            - Content-Type : application/json
        - result 
            - address or error
        - example
            - request body
                { 
                    "jsonrpc": "2.0", 
                    "method": "getNewAddress", 
                    "id": "1"
                }
            - response body
                {
                    "jsonrpc": "2.0",
                    "id": "1",
                    "result": {
                        "address": "16k26htS4Dr8JeTdxX8osrsYvwCFWEbkrC"
                    }
                }

    - getAccounts
        - 모든 account 정보를 조회함
        - header
            - Content-Type : application/json
        - result 
            - address list or error
        - example
            - request body
                { 
                    "jsonrpc": "2.0", 
                    "method": "getAccounts", 
                    "id": "1"
                }
            - response body
                {
                    "jsonrpc": "2.0",
                    "id": "1",
                    "result": {
                        "accounts": [
                            {
                                "balance": 0,
                                "address": "1NBaNVXqcLTFNJ3vdVrdaWJ8eMjkAYixgz"
                            },
                            {
                                "balance": 0,
                                "address": "16k26htS4Dr8JeTdxX8osrsYvwCFWEbkrC"
                            }
                        ]
                    }
                }