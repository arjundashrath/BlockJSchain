const hash = require('hash.js')

module.exports = class Blockchain
{
	
	constructor(preceeding_zero)
	{
		this.chain = []
		this.create_block(1,'0')
		
		if(preceeding_zero === undefined)
		{
			this.preceeding_zero = '0000'
		}
		else
		{
			this.preceeding_zero = preceeding_zero
		}
	}
	
	create_block(proof, previous_hash, data = null)
	{
		
		let block = {
			
			'index': this.chain.length + 1,
			'proof': proof,
			'previous_hash': previous_hash,
			'data': data
			
		}
	
		this.chain.push(block)
		
		return block
		
	
	}
	
	get_previous_block()
	{
		
		return this.chain.slice(-1)[0]
		
	}
	
	proof_of_work(previous_proof)
	{
		
		let nonce = 1
		
		let check = false
		
		while(check === false)
		{
			let POW = hash.sha256().update(((nonce * nonce) - (previous_proof * previous_proof)).toString()).digest('hex')
			
			
			
			if(POW.slice(0,this.preceeding_zero.length) == this.preceeding_zero)
			{
				check = true
				
			}
			else
			{
				nonce += 1
				
			}
			
			
		}
		
		return nonce
		
		
		
	}
	
	hash_block(block)
	{
		
		let hashed_block = JSON.stringify(block)
		
		
		return hash.sha256().update(hashed_block).digest('hex')
	}
	
	check_chain_integrity()
	{
		
		let prev_blk = this.chain[0]
		
		let index = 1
		
		while(index < this.chain.length)
		{
			
			let block = this.chain[index]
			
			if(block['previous_hash'] != this.hash_block(prev_blk))
			{
				return false
			}
			
			let prev_proof = prev_blk['proof']
			
			let proof = block['proof']
			
			
			let POW = hash.sha256().update(((proof * proof) - (prev_proof * prev_proof)).toString()).digest('hex')
			
			if(POW.slice(0,this.preceeding_zero.length) != this.preceeding_zero)
			{
				return false	
			}
			
			prev_blk = block
			
			index += 1
				
			
		}
		
		return true
	}
	
	mine_block(data = null)
	{
		
		let prev_blk = this.get_previous_block()
		
		let prev_proof = prev_blk['proof']
		
				
		let proof = this.proof_of_work(prev_proof)
		
		
		let prev_hash = this.hash_block(prev_blk)
		
		
		let block = this.create_block(proof, prev_hash, data)
	}
	
	get_chain()
	{
		
		return this.chain
		
	}
	
	
};

